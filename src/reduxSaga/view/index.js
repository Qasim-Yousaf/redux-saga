import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Text, SafeAreaView ,ScrollView} from 'react-native';

function Index(props) {
  let users = useSelector((state) => state.users.user);
  let posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: "GET_POST",
    });

    dispatch({
      type: "GET_USER",
    });
  }, [dispatch]);
  return (
    <SafeAreaView>
<ScrollView contentContainerStyle={{
  padding:10
}}>

        {users &&
          users.map((user, index) => (
            <Text key={index}>
              {user.id} -- Email -- {user.email}
            </Text>
          ))}
          
        {posts &&
          posts.map((post, index) => (
            <Text key={index}>
              {post.id} -- TITLE -- {post.title}
            </Text>
          ))}

</ScrollView>

    </SafeAreaView>
  );
}

export default Index;
