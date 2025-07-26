export interface CardProps {
  title: string;
  content: string;
}
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm " | "rounded-md" | "rounded-full";
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface PostsPageProps {
  posts: PostProps[];
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
export interface UsersPageProps {
  users: UserProps[];
}
