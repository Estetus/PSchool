import { forwardRef } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = forwardRef(function Button(
  { className, appearance, ...props },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(className, styles["search-btn"], {
        [styles["login-btn"]]: appearance === "login",
      })}
    >
      {props.text}
    </button>
  );
});

export default Button;
