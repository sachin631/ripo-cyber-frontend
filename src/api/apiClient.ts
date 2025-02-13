import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});


//home_conetnt_listing
export const get_home_content = async () => {
  const response = await api.get('/admin/home/home_detail');
  return response?.data;
}

export const privacy_details = async () => {
  const response = await api.get('/admin/common/privacy_terms_about_detail', {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}

export const get_our_services_listing = async (data_type: number) => {
  const response = await api.get(`/user/common/usecase_listing?data_type=${data_type}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}

export const carerr_details = async () => {
  const response = await api.get('/user/common/career_detail', {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}

export const work_together = async () => {
  const response = await api.get('/user/common/work_together_detail', {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}


export const internship_listing = async () => {
  const response = await api.get('/user/common/internship_category_listing', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const internship_details = async (internship_category_id: any) => {
  const response = await api.get(`/user/common/get_internship_details?internship_category_id=${internship_category_id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const apply_internship = async (data: any) => {
  const response = await api.post('/user/common/apply_internship', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response?.data;
}

export const user_login = async (data: any) => {
  const response = await api.post('/user/auth/login', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const contat_us = async (data: any) => {
  const response = await api.post('/user/common/contact_us', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const forgotPasswordClient = async (data: any) => {
  const response = await api.post('/user/auth/forgot_password', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const verifyOtp = async (data: any) => {
  const response = await api.post('/user/auth/verify_otp', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

export const new_passwordClient = async (data: any) => {
  const response = await api.put('/user/auth/new_password', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response?.data;
}

