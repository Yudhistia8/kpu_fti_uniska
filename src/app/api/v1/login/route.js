import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/db";

export async function POST(req) {
  const request = await req.json();

  const res = await prisma.pemilih.findMany();

  console.log(request);

  return NextResponse.json({ message: res }, { status: 200 });
}
