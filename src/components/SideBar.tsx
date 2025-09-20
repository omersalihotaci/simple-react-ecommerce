import  { useState,useEffect } from 'react'
import CategoryService from '../services/CategoryService'
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import type { ProductType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import { setLoading } from '../redux/slices/userSlice';
import ProductService from "../services/ProductService";


function SideBar() {
  const dispatch = useDispatch();
const [categories, setCategories] = useState< string[]>([]);
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  
  const handleChange = (category:string,e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
        
        setSelectedCategories((prev) => [...prev, category]);
    } else {
        
        setSelectedCategories((prev) => prev.filter((c) => c !== category));
    }
  }
  
  
  const getAllCategories = async () => {
    try {
      const response: string[] = await CategoryService.getAllCategories();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  }

 useEffect(() => {
   getAllCategories();
 }, [])
  useEffect(() => {
      getByCategory();
  }, [selectedCategories]);

  const getByCategory = async () => {
    try {
       dispatch(setLoading(true));
      if (selectedCategories.length === 0) {
        const response: ProductType[] = await ProductService.getAll();
         dispatch(setProducts(response));
        return;

      } 
     
          const promises: Promise<ProductType[]>[] =
              (
                  selectedCategories.map((category) =>
                      CategoryService.getByCategoryName(category)
                  )) ||
              [];
        const response:ProductType[]= (await Promise.all(promises)).flat();
        
      if (response) {
        dispatch(setProducts(response));
        }


      } catch (error) {
          console.log(error);
    } finally {
      dispatch(setLoading(false));
      }
  };

  return (
      <div
          style={{
              
              marginTop:"40px",
              width: "200px",
              
              borderRight: "1px solid #ddd",
              
              padding: "16px",
          }}
      >
          <FormGroup sx={{ width: "30px" }}>
              {categories &&
                  categories.map((category,index) => {
                      return (
                          <FormControlLabel
                              sx={{ userSelect: "none" }}
                              label={category}
                              control={
                                  <Checkbox
                                      onChange={(
                                          e: React.ChangeEvent<HTMLInputElement>
                                      ) => handleChange(category, e)}
                                  />
                              }
                          key={index}
                          checked={selectedCategories.includes(category)}
                          />
                      );
                  })}
          </FormGroup>
      </div>
  );
}

export default SideBar


 