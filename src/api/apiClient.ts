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

export const get_our_services_listing = async (page: number, limit: number, search_key: string, data_type: number) => {
  console.log(page, limit, search_key, 'page');
  const response = await api.get(`/admin/useCase/usecase_listing?page=${page}&limit=${limit}&search_key=${search_key}&data_type=${data_type}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  });
  return response?.data;
}


