/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
export const getMyProjects = async () => {
  const { data } = await axios.get(`https://my-portfolio-ten-sepia-53.vercel.app/api/v1/universal/get-projects`);
  return data.data; 
};
export const getSingleProjects = async (projectId:string) => {
  const { data } = await axios.get(`https://my-portfolio-ten-sepia-53.vercel.app/api/v1/universal/get-projects/${projectId}`);
  return data.data; 
};

export const getMyBlogs = async () => {
  const { data } = await axios.get(`https://my-portfolio-ten-sepia-53.vercel.app/api/v1/universal/get-blogs`);
  return data.data; 
};
export const getSingleBlogs = async (blogId:string) => {
  const { data } = await axios.get(`https://my-portfolio-ten-sepia-53.vercel.app/api/v1/universal/get-blogs/${blogId}`);
  return data.data; 
};


export const getAllExperience = async () => {
  const { data } = await axios.get(`https://my-portfolio-ten-sepia-53.vercel.app/api/v1/universal/get-experience`);
  return data.data; 
};


