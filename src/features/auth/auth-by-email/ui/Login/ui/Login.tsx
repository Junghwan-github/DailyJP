import { InputText } from '@shared/ui/InputText';
import { useForm } from 'react-hook-form';
import { Button, View } from 'react-native';

type FormType = {
  email: string;
  password: string;
};

export const Login = () => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <View>
      <InputText
        name="email"
        control={control}
        placeholder="이메일을 입력해주세요"
        rules={{
          required: "이메일은 필수입니다",
          minLength: {
            value: 3,
            message: '너무 짧습니다',
          },
        }}
      />

       <InputText
        name="password"
        control={control}
        placeholder="비밀번호을 입력해주세요"
        secureTextEntry
        rules={{
          required: '비밀번호를 입력하세요',
        }}
      />

    </View>
  );
};
