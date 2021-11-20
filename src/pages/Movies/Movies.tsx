import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import Card from '../../components/Card/Card';
import { styles }  from './style';
import api from './../../api/api';

export default function Movies() {

    const [posts, setPosts] = useState([])

    async function getPosts() {[
         await api.get('/pokemon').then((data)=> {
            setPosts(data.data.results)
        })
    ]}

    useEffect(()=>{
        getPosts()
    },[])

        const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

    return (
        <SafeAreaView style={styles.container}>
            <Text>Posts</Text>
            <ScrollView >
                {posts.map((post,index) => {
                    return (
                        <Card key={index}  header={post.name} >
                            <Text>{post.name}</Text>
                            <Text>{post.url}</Text>
                        </Card>
                    )
                })}
        </ScrollView>
        </SafeAreaView>
    )
      
      
}







    // //const [posts, setPosts] = useState([])
    // const DATA = [
    //     {
    //       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //       title: 'First Item',
    //     },
    //     {
    //       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //       title: 'Second Item',
    //     },
    //     {
    //       id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //       title: 'Third Item',
    //     },
    //   ];
      
    //   const Item = ({ title }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.title}>{title}</Text>
    //     </View>
    //   );
      
    //   const styles = StyleSheet.create({
    //     container: {
    //       flex: 1,
    //       marginTop: StatusBar.currentHeight || 0,
    //     },
    //     item: {
    //       backgroundColor: '#f9c2ff',
    //       padding: 20,
    //       marginVertical: 8,
    //       marginHorizontal: 16,
    //     },
    //     title: {
    //       fontSize: 32,
    //     },
    //   });

      
    //     const renderItem = ({ item }) => (
    //       <Item title={item.title} />
    //     );
      
    //     return (
    //       <SafeAreaView style={styles.container}>
    //         <FlatList
    //           data={DATA}
    //           renderItem={renderItem}
    //           keyExtractor={item => item.id}
    //         />
    //       </SafeAreaView>
    //     );