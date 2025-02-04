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

export const carerr_details=async()=>{
  const response = await api.get('/user/common/career_detail',{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}

export const work_together=async()=>{
  const response = await api.get('/user/common/work_together_detail',{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response?.data;
}


