const URL = {
  getAllProducts: (page) => `/product/?page=${page}&limit=10`,
  getSingleProduct: (id) => `/product/${id}`,
  Login: "auth/login",
  Register: "auth/register",
  createOrder: "/order",
};

export default URL;
