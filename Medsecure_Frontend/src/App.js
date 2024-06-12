import Home from './components/home/Home';
import Login from './components/home/Login';
import ScannerPage from './components/pages/ScannerPage';
import AdminPage from './components/pages/Admin';
import ManufacturerPage from './components/pages/Manufacturer';
import SupplierPage from './components/pages/Supplier';
import RetailerPage from './components/pages/Retailer';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import AddAccountPage from './components/pages/AddAccount';
import ManageAccountPage from './components/pages/ManageAccount';
import AddProductPage from './components/pages/AddProduct';
import ProfilePage from './components/pages/Profile';
import UpdateProductPage from './components/pages/UpdateProduct';
import ProductPage from './components/pages/Product';
import AuthenticProductPage from './components/pages/AuthenticProduct';
import FakeProductPage from './components/pages/FakeProduct';
import UpdateProductDetailsPage from './components/pages/UpdateProductDetails';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* Public routes */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/scanner' element={<ScannerPage />} />
        <Route exact path='/product' element={<ProductPage />} />
        <Route exact path='/authentic-product' element={<AuthenticProductPage />} />
        <Route exact path='/fake-product' element={<FakeProductPage />} />

        {/* Private routes */}
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route exact path='/admin' element={<AdminPage />} />
          <Route exact path='/add-account' element={<AddAccountPage />} />
          <Route exact path='/manage-account' element={<ManageAccountPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["manufacturer", "supplier", "retailer"]} />}>
          <Route exact path='/profile' element={<ProfilePage />} />
          <Route exact path='/update-product' element={<UpdateProductPage />} />
          <Route exact path='/update-product-details' element={<UpdateProductDetailsPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
          <Route exact path='/manufacturer' element={<ManufacturerPage />} />
          <Route exact path='/add-product' element={<AddProductPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
          <Route exact path='/supplier' element={<SupplierPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
          <Route exact path='/retailer' element={<RetailerPage />} />
        </Route>

        {/* Catch-all route */}
        {/* <Route path='*' element={<MissingPage />} /> */}

      </Route>
    </Routes>
  );
}

export default App;

