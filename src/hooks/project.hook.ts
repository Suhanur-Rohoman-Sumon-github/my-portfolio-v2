/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllExperience, getMyBlogs, getMyProjects, getSingleBlogs } from "@/services";
import { useQuery } from "@tanstack/react-query";





export const useMyProjectQuery = () => {
    
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-my-projects"],
    queryFn: async () => {
      const data = await getMyProjects();

      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};


export const useGetMyBlogQuery = () => {
    
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-my-Blogs"],
    queryFn: async () => {
      const data = await getMyBlogs();

      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};



export const useGetAllMyExperienceQuery = () => {
    
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-my-experience"],
    queryFn: async () => {
      const data = await getAllExperience();

      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};
export const useGetSingleBLogs = (blogId:string) => {
    
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-single-Blogs",blogId],
    queryFn: async () => {
      const data = await getSingleBlogs(blogId);

      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};