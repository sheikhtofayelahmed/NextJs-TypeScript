import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";
const About = (props: object = {}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const sessionChecked = async () => {
      const result = await getSession();
      if (!result) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    sessionChecked();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>welcome to About</h1>
    </div>
  );
};

export default About;
