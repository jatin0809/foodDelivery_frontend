import axios from "axios";

// to add item to cart
export const addToCart = async (userId, productId, productName, productImage, price, quantity) => {
  try {
    const payload = {
      userId,
      items: [
        {
          productId,
          productName,
          productImage,
          quantity,
          price,
        },
      ],
    };

    await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/add`, payload);

   
  } catch (error) {
    console.log("Error in adding products:", error)
  }
};

// remove product from cart
export const decreaseProductCount = async (userId, productId) => {
  try {
    const payload = {
      userId,
      productId,
    };

    await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/remove`, payload);
  } catch (error) {
    console.error("Error in decreasing product count:", error);
  }
};

export const fetchCartByUserId = async (userId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/${userId}`);
    return {
      success: true,
      cart: response.data.cart,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
      error: error.message,
    };
  }
};


