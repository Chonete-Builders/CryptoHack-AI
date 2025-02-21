"use client"
import { type FormEvent, useState } from "react"
import type React from "react"

import ImageUpload from "../components/ImageUpload"

const Page = () => {
  const [formData, setFormData] = useState({
    description: "",
    impact: "",
    uniqueness: "",
    image: null as File | null,
  })

  const handleShare = (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      description: "",
      impact: "",
      uniqueness: "",
      image: null,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (file: File | null) => {
    setFormData({
      ...formData,
      image: file,
    })
  }

  const deleteData = () => {
    setFormData({
      description: "",
      impact: "",
      uniqueness: "",
      image: null,
    })
  }

  return (
    <form
      onSubmit={handleShare}
      className="w-full min-h-screen flex flex-col items-center justify-start gap-8 py-6 px-5 bg-[#B4AB9A]"
    >
      <div className="w-full max-w-[1057px] min-h-[285px] bg-[#F5F5F5] rounded-[50px] py-5 pr-[4%] pl-[10%] flex-col md:flex-row flex items-center justify-start md:justify-start gap-4 md:gap-8">
        <h1 className="text-[#2C2C2C] font-bold text-5xl">Idea Name</h1>

        <div>
          <ImageUpload onImageChange={handleImageChange} />
        </div>

        <div className="flex flex-row md:flex-col items-center justify-center gap-7 md:ml-auto">
          <button className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]">Share</button>
          <button
            type="button"
            className="bg-[#2C2C2C] text-white w-[108px] h-[32px] rounded-[8px]"
            onClick={deleteData}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1057px] flex-col md:flex-row gap-4 flex items-center justify-between p-1">
        <div className="bg-[#F5F5F5] w-full max-w-[638px] rounded-[50px] h-[594px] flex flex-col gap-5 items-start justify-center p-5">
          <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Description</h2>

          <div className="bg-white h-[473px] p-4 border-[1px] w-full border-[#D9D9D9] rounded-[10px]">
            <textarea
              name="description"
              id="description"
              className="w-full h-full p-0 resize-none text-[#1E1E1E] font-normal text-base leading-[22.4px] border-none outline-none"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-8 max-w-[375px] h-full">
          <div className="bg-[#F5F5F5] w-[372px] h-[252px] rounded-[50px] flex items-start justify-center flex-col gap-2 p-4">
            <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Impact</h2>

            <div className="w-full max-w-[326px] h-[153px] bg-white p-4 border-[1px] border-[#D9D9D9] rounded-[10px]">
              <textarea
                name="impact"
                id="impact"
                className="w-full h-full p-0 resize-none text-[#1E1E1E] font-normal text-base leading-[22.4px] border-none outline-none"
                value={formData.impact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-[372px] h-[327px] rounded-[50px] flex items-start justify-center flex-col gap-2 p-4">
            <h2 className="text-[#2C2C2C] text-base font-semibold ml-5">Uniqueness</h2>

            <div className="w-full max-w-[331px] h-[216px] bg-white p-4 border-[1px] border-[#D9D9D9] rounded-[10px]">
              <textarea
                name="uniqueness"
                id="uniqueness"
                className="w-full h-full p-0 resize-none text-[#1E1E1E] font-normal text-base leading-[22.4px] border-none outline-none"
                value={formData.uniqueness}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Page

