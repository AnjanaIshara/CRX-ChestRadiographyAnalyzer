import React,{useState} from 'react';
import { Button,View, Text,Image,TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PredicitonsScreen=({navigation})=>{
    const [singleFile, setSingleFile] = useState(null);
    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
          // If file selected then create FormData
          const fileToUpload = singleFile;
          const data = new FormData();
          
          data.append('pic', fileToUpload);
          // Please change file upload URL
          const endpoint='http://10.0.2.2:5000/predict';
          fetch(endpoint,
            {
              method: 'POST',
              body: data
            }
          ).then(function(response){
            return response.json();
          }).then(function(jsonRes){
            console.log(jsonRes);
          })
          
          
        } 
        else {
          // If no file selected the show alert
          alert('Please Select File first');
        }
      };
      const selectFile = async () => {
        // Opening Document Picker to select one file
        try {
          const res = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.images],
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          // Setting the state to show single file attributes
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Predictions srcreen</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text>Go to Home</Text>
     </TouchableOpacity>
        <TouchableOpacity
        onPress={selectFile}
        >
            <Text style={{color:'#A000FF'}}>
                Select an image
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={{color:'#FF0A0A'}}>Upload File</Text>
      </TouchableOpacity>
      
    </View>
    )
}
export default PredicitonsScreen;