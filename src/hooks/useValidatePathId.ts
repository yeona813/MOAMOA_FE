import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const useValidatePathId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidId(id)) {
      navigate('/404');
    }
  }, [id, navigate]);

  const isValidId = (id: string | undefined) => {
    return id && /^\d+$/.test(id);
  };
};
