//发起对产品相关api的请求
import axios from "axios";

const getProduct = async (productId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product data", error);
  }
};

export { getProduct };
