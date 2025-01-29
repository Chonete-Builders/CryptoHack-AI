import { Client } from "@gradio/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt } = body;


    if (!prompt || prompt.trim() === "") {
      console.warn("No prompt provided in request body.");
      return NextResponse.json({ message: "Prompt is required" }, { status: 400 });
    }

    const client = await Client.connect("jsandinoDev/Travel_Wise_GPT2");

    const result = await client.predict("/predict", {
      prompt: prompt.trim(),
    });

    if (result?.data?.[0]) {
      const response = result.data[0];
      const sanitizedResponse = response.replace(prompt.trim(), "").trim();

      return NextResponse.json({ response: sanitizedResponse }, { status: 200 });
    } else {
      console.error("Unexpected result structure:", result);
      return NextResponse.json(
        { message: "Unexpected result structure from Gradio Space." },
        { status: 500 }
      );
    }
  } catch (error) {

    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
