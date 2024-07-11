#include<iostream>
#include<limits.h>
#include<algorithm>
using namespace std;
int main(){
    int arr[7]={1,2,3,4,5,6,7};
    int max1=INT_MIN;
    int ans=0;
    for(int i=0;i<7;i++){
        if(arr[i]>ans){
            ans=arr[i];
        }
    }
    
    int second=0;
    for(int i=0;i<7;i++){
        while(arr[i]!=ans){
           second=max(arr[i],second);
        }
    }
    cout<<second;
    

    return 0;
}



