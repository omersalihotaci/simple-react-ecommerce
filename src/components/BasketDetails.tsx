import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { deleteBasket,  setDrawer,  } from '../redux/slices/basketSlice';
import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";



function BasketDetails() {
    const dispatch=useDispatch();
    const { drawer, basket } = useSelector((state: RootState) => state.basket);
    
   
    
     const total=   basket.reduce((acc, product) => {
            return acc + product.price * product.count;
     }, 0);
     
        
    
    const closeDrawer = () => {
        dispatch(setDrawer(false));
    }

  return (
      <Drawer anchor="right" open={drawer} onClose={closeDrawer}>
          {basket.length !== 0 ? (
              basket.map((product) => {
                  return (
                      <div
                          style={{
                              height: "150px",
                              marginTop: "40px",
                              display: "flex",
                              width: "600px",
                              alignItems: "center",
                              justifyContent: "space-around",
                          }}
                      >
                          <div style={{ width: "100px" }}>
                              <img
                                  src={product.image}
                                  style={{ width: "100px" }}
                              />
                          </div>
                          <div style={{ width: "200px" }}>
                              <h2 style={{ fontSize: "15px" }}>
                                  {" "}
                                  {product.title}{" "}
                              </h2>
                              <p> {product.description.substring(0, 90)} </p>
                          </div>
                          <div
                              style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  height: "100%",
                                  alignItems: "center",
                                  justifyContent: "center",
                              }}
                          >
                              <div
                                  style={{
                                      color: "brown",
                                      marginBottom: "10px",
                                  }}
                              >
                                  Adet
                              </div>
                              <div>{product.count}</div>
                          </div>
                          <div
                              style={{
                                  display: "flex",

                                  justifyContent: "start",
                                  alignItems: "center",
                              }}
                          >
                              <h3 style={{ width: "5rem", fontSize: "20px" }}>
                                  {" "}
                                  {product.price} ₺
                              </h3>
                              <Button
                                  onClick={() =>
                                      dispatch(deleteBasket(product))
                                  }
                                  startIcon={<DeleteIcon />}
                                  sx={{
                                      marginLeft: "20px",
                                      width: "90px",
                                      height: "40px",
                                      padding: "4px 8px",
                                      fontSize: "13px",
                                  }}
                                  variant="contained"
                              >
                                  delete
                              </Button>
                          </div>
                      </div>
                  );
              })
          ) : (
              <div
                  style={{
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                  }}
              >
                  <p style={{ fontSize: "20px" }}>Sepet Boş</p>
              </div>
          )}
          <div style={{ marginTop: "40px", marginLeft:"20px",fontSize:"20px",marginBottom:"40px"}}>Toplam Tutar:{total} ₺</div>
      </Drawer>
  );
}

export default BasketDetails