"use server";

export const POST = async (request: Request) => {
  const data = await request.json();
  console.log(data);
  console.log("post data income");
  return data;
};
