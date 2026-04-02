import { Storage } from "@google-cloud/storage";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getStorageClient() {
  const projectId = getRequiredEnv("GCP_PROJECT_ID");
  const clientEmail = getRequiredEnv("GCP_CLIENT_EMAIL");
  const privateKey = getRequiredEnv("GCP_PRIVATE_KEY").replace(/\\n/g, "\n");

  return new Storage({
    projectId,
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });
}

export async function GET() {
  const bucketName = process.env.GCS_BUCKET_NAME ?? "portfolio_files_yuwi";
  const objectPath = process.env.GCS_APK_OBJECT_PATH ?? "Yuwi-QuizApp.apk";
  const ttlSeconds = Number(process.env.APK_DOWNLOAD_TTL_SECONDS ?? "900");

  try {
    const storage = getStorageClient();
    const filename = objectPath.split("/").pop() ?? "Yuwi-QuizApp.apk";
    const [signedUrl] = await storage
      .bucket(bucketName)
      .file(objectPath)
      .getSignedUrl({
        version: "v4",
        action: "read",
        expires: Date.now() + ttlSeconds * 1000,
        responseDisposition: `attachment; filename="${filename}"`,
        responseType: "application/vnd.android.package-archive",
      });

    return NextResponse.redirect(signedUrl, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Failed to generate signed APK URL", error);

    return NextResponse.json(
      { error: "APK download is not configured yet." },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
        status: 500,
      },
    );
  }
}
