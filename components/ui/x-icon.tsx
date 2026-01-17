import React from "react";

interface FileIconProps {
  className?: string;
}

const XIcon: React.FC<FileIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9636 0H17.8771L11.512 7.20103L19 17H13.1361L8.54397 11.057L3.28953 17H0.37431L7.18236 9.29769L0 0H6.01099L10.1619 5.43215L14.9619 0H14.9636ZM13.9411 15.2738H15.5555L5.13466 1.63549H3.40226L13.9411 15.2738Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default XIcon;
