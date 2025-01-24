import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";
import { Loader } from "../components";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/slices/loaderSlice";

const useProductData = (page) => {
  const dispatch = useDispatch;
  const { isLoading, error, data } = useQuery({
    queryKey: ["Products", page],
    queryFn: () => fetchProductList(),
  });

  const fetchProductList = async () => {
    const response = await network.get(URL.getAllProducts(page));
    return response;
  };


  if (isLoading) {
    dispatch(setLoader(isLoading));
  } else {
    dispatch(setLoader(isLoading));
  }

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data?.data, isLoading, error };
};

export default useProductData;
