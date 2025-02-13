interface IUser {
    username: string;
    email: string;
}

interface IProps {
    user: IUser;
}

export const User: React.FC<IProps> = ({ user }) => {
    return (
        <div>
           <p>{user.username} | {user.email}</p>
        </div>
    )
}