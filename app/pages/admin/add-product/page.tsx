"use client";

import type React from "react";
import { useState } from "react";
import AdminHeader from "@/app/components/admin-header";

export default function AddProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      productName,
      description,
      price,
      sku,
      category,
      stockQuantity,
    });
  };

  const handleCancel = () => {
    setProductName("");
    setDescription("");
    setPrice("");
    setSku("");
    setCategory("");
    setStockQuantity("");
  };

  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Header stays full-width */}
      <AdminHeader />

      {}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Add New Product
          </h1>
          <p className="text-[#a67c52] mb-6 md:mb-8 text-sm md:text-base">
            Fill in the details below to add a new product to the catalog.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label
                htmlFor="productName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                placeholder="e.g., Premium Linen Fabric"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg placeholder:text-[#a67c52] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97638]"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter a detailed product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg placeholder:text-[#a67c52] text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#d97638]"
              />
            </div>

            {/* Price & SKU */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="$0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg placeholder:text-[#a67c52] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97638]"
                />
              </div>
              <div>
                <label
                  htmlFor="sku"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  SKU
                </label>
                <input
                  id="sku"
                  type="text"
                  placeholder="e.g., FAB-12345"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg placeholder:text-[#a67c52] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97638]"
                />
              </div>
            </div>

            {/* Category & Stock Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97638] cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a67c52' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                    backgroundSize: "14px",
                  }}
                >
                  <option value="">Select a category</option>
                  <option value="fabrics">Fabrics</option>
                  <option value="textiles">Textiles</option>
                  <option value="materials">Materials</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="stockQuantity"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Stock Quantity
                </label>
                <input
                  id="stockQuantity"
                  type="number"
                  placeholder="0"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f6] border border-[#e8dfd6] rounded-lg placeholder:text-[#a67c52] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97638]"
                />
              </div>
            </div>

            {/* Product Images */}
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2">
                Product Images
              </label>

              <div className="border-2 border-dashed border-[#e8dfd6] rounded-lg p-8 md:p-10 bg-[#faf8f6]">
                <div className="flex flex-col items-center justify-center text-center">
                  <svg
                    className="w-10 h-10 mb-3 text-[#a67c52]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div className="text-sm">
                    <span className="text-[#d97638] font-medium cursor-pointer hover:underline">
                      Click to upload
                    </span>
                    <span className="text-[#a67c52]"> or drag and drop</span>
                  </div>
                  <p className="text-xs text-[#a67c52] mt-1">
                    SVG, PNG, JPG or GIF (MAX. 800×400px)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
                  <img
                    src="/brown-fabric-texture.jpg"
                    alt="Brown fabric"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
                  <img
                    src="/blue-fabric-texture.jpg"
                    alt="Blue fabric"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-[#e8dfd6] text-gray-900 rounded-lg hover:bg-[#dfd5ca] transition font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 py-2 bg-[#d97638] hover:bg-[#c4671f] text-white rounded-lg transition font-medium"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
