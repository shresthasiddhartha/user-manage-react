import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout =()=> {
    
    return(
            <div>
              <div class="row"  >
                <div class="sidebar">
                    <Sidebar/>
                </div>

                <div class="right">
                  
                  <Outlet/>
                                    
                </div>

                
              </div>
          
            </div>
        );
}
export default Layout;

