import imagekit from "../../../../lib/imagekit";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResponse = await imagekit.upload({
    file: buffer,
    fileName: `profile_${Date.now()}.jpg`,
    folder: "/profiles",
  });

  return Response.json({
    url: uploadResponse.url,
    fileId: uploadResponse.fileId,
  });
}
