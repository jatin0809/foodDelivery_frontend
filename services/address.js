import axios from "axios";

export const fetchAddressByUserId = async (userId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/address/${userId}`);
      return {
        success: true,
        address: response.data.address,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
        error: error.message,
      };
    }
};

export const addAddressToDatabase = async (userId, userName, addressDetails) => {
    try {
      const { state, city, pincode, phoneNumber, street } = addressDetails;

      const data = { userId, userName, state, city, pincode, phoneNumber, street  };
  
      // Make the POST request to add the address
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/address/add`, data);
  
      // Handle successful response
      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      // Handle error response
      return {
        success: false,
        message: error.response?.data?.message || 'Something went wrong',
        error: error.message,
      };
    }
};
  
export const deleteAddress = async (userId, addressId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/address/delete/${addressId}`,
        {
          data: { userId }, // Sending userId in the request body
        }
      );
  
      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {

      return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
        error: error.message,
      };
    }
  };