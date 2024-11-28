import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const useValidatePathId = (shouldValidate: boolean) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldValidate && !isValidId(id)) {
      navigate('/404');
    }
  }, [id, navigate, shouldValidate]);

  const isValidId = (id: string | undefined) => {
    return id && /^\d+$/.test(id);
  };
};
