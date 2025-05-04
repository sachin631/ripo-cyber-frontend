import axios from 'axios';

// Configure axios instance with your Render backend URL
const api = axios.create({
  baseURL: 'https://ripo-cyber-backend-n4zi.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Home Content
export const get_home_content = async () => {
  const response = await api.get('/admin/home/home_detail');
  return response?.data;
}

// Privacy Policy
export const privacy_details = async () => {
  const response = await api.get('/admin/common/privacy_terms_about_detail');
  return response?.data;
}

// Services Listing
export const get_our_services_listing = async (data_type: number) => {
  const response = await api.get(`/user/common/usecase_listing?data_type=${data_type}`);
  return response?.data;
}

// Career Details
export const carerr_details = async () => {
  const response = await api.get('/user/common/career_detail');
  return response?.data;
}

// Work Together
export const work_together = async () => {
  const response = await api.get('/user/common/work_together_detail');
  return response?.data;
}

// Internship Listing
export const internship_listing = async () => {
  const response = await api.get('/user/common/internship_category_listing');
  return response?.data;
}

// Internship Details
export const internship_details = async (internship_category_id: string) => {
  const response = await api.get(
    `/user/common/get_internship_details?internship_category_id=${internship_category_id}`
  );
  return response?.data;
}

// Apply for Internship
export const apply_internship = async (data: any) => {
  const response = await api.post('/user/common/apply_internship', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response?.data;
}

// User Login
export const user_login = async (data: any) => {
  const response = await api.post('/user/auth/login', data);
  return response?.data;
}

// Contact Us
export const contat_us = async (data: any) => {
  const response = await api.post('/user/common/contact_us', data);
  return response?.data;
}

// Forgot Password
export const forgotPasswordClient = async (data: any) => {
  const response = await api.post('/user/auth/forgot_password', data);
  return response?.data;
}

// Verify OTP
export const verifyOtp = async (data: any) => {
  const response = await api.post('/user/auth/verify_otp', data);
  return response?.data;
}

// New Password
export const new_passwordClient = async (data: any) => {
  const response = await api.put('/user/auth/new_password', data);
  return response?.data;
}

export default api;
