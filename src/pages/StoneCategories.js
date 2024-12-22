
import React from "react";

const stones = [
  {
    name: "Rose Calcite",
    image: "Rose Calcite.jpg", // Replace with the correct image path
    description:
      "Rose calcite is a powerful stone known for its gentle energy. It helps with emotional healing, promotes self-love, and reduces stress.",
    price: "$50 per kg",
  },
  {
    name: "Rhodonite",
    image: "Rhodonite.jpg", // Replace with the correct image path
    description:
      "Rhodonite is known for its emotional healing properties, relieving stress and anxiety, and keeping the wearer calm and centered.",
    price: "$50 per kg",
  },
  
  {
    name: "Pink Banded Onyx",
    image: "pink.jpg", // Replace with the correct image path
    description:
      "Pink Banded Onyx promotes grounding, physical strength, and vitality, especially during recovery.",
    price: "$50 per kg",
  },
  {
    name: "Rutile Serpentine",
    image: "Rutile Serpentine.jpg", // Replace with the correct image path
    description:
      "Rutile Serpentine provides a protective energy field, shielding from negativity and maintaining balance.",
    price: "$50 per kg",
  },
  {
    name: "Nephrite Sphere",
    image: "Nephrite Sphere.jpg", // Replace with the correct image path
    description:
      "Nephrite spheres amplify the soothing, healing properties of jade.",
    price: "$50 per kg",
  },
  {
    name: "Pistachio Calcite",
    image: "Pistachio Calcite.jpg", // Replace with the correct image path
    description:
      "Pistachio Calcite is associated with calming, healing energy.",
    price: "$40 per kg",
  },

  {
    name: "Pistachio ",
    image: "Pasticho.jpg", // Replace with the correct image path
    description:
      " Pistachio Calcite is a beautiful green varietyof calcite that is associated with various metaphysical properties.",
    price: "$45 per kg",
  },


  {
    name: "Afghanite ",
    image: "afghanite.jpg", // Replace with the correct image path
    description:
      " Blue Afghanite is a rare and unique gemstone its striking blue color and metaphysical properties It is believed to provide protection against negative energies and harmful influences, offering a grounding effect that helps stabilize emotions and mental state.",
    price: "$45 per kg",
  },

  {
    name: "heart ",
    image: "hearts.jpg", // Replace with the correct image path
    description:
      "Serpentine hearts are beautifully crafted stones known for their vibrant green hues and smooth, polished surface. They are often associated with promoting emotional balance and a sense of peace.",
    price: "$40 per kg",
  },

  {
    name: "Rutile serpentine hearts ",
    image: "Rutile serpentine hearts.jpg", // Replace with the correct image path
      
    description:" hearts are beautifully crafted stones known for their vibrant green hues and smooth, polished surface. They are often associated with promoting emotional balance and a sense of peace.",
    price: "$40 per kg",
  },



  
];



const StoneCategories = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Stone Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stones.map((stone, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={stone.image}
              alt={stone.name}
              className="w-60 h-60 mx-auto "
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {stone.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{stone.description}</p>
              <p className="text-gray-800 font-medium mt-4">{stone.price}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="flex my-6">


        <p className=" mx-auto text-green-900">We have Alot of categories of Minerals if you need more contact us through whatsapp</p>
        </div>
    
    </div>
  );
};

export default StoneCategories;

