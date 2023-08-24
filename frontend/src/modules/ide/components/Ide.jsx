import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
//import { Toolbar } from '@mui/material'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
import './Ide.css'
import Button from '@mui/material/Button';
import apiClient from '../../../shared/services/api-client';

const Ide = () => {
    const editorRef = useRef(null);
    const mount = (editor) => {editorRef.current = editor};
    const getCode = async () => {
        const code = editorRef.current.getValue();
        console.log('Code is ',code);
        const jsonObject = {'Code':code};
        try{
            const response = await apiClient.post(process.env.REACT_APP_CODE_URL,jsonObject);
            console.log('Response is', response);
        }
        catch(err){
            console.log('Error during code submission ',err);
        }
    }
    const files = {
        'JavaScript': {
            name: '.js',
            language: 'javascript',
            value: '//someJSCodeExample'
        },
        'CSS': {
            name: '.css',
            language: 'css',
            value: '/*someCSSCodeExample*/'
        },
        'HTML': {
            name: '.html',
            language: 'html',
            value: '<!--someHTMLCodeExample-->'
        },
        'C++': {
            name: '.cpp',
            language: 'cpp',
            value: `
            class Solution{
                int show(int x, int y){
                    return x + y;
                }
            }`
        },
        'C': {
            name: '.c',
            language: 'c',
            value: '//someCCodeExample'
        },
        'JAVA': {
            name: '.java',
            language: 'java',
            value: '//someJavaCodeExample'
        },
        'Python': {
            name: '.python',
            language: 'python',
            value: '#somePythonCodeExample'
        }
    };
    const [fileName, setFileName] = useState('C++');
    const file = files[fileName];
    console.log(file);
    return (
        <>
        <div className='row'>
            <button disabled={fileName === 'C++'} onClick={() => setFileName('C++')}>C++</button>
            <button disabled={fileName === 'JAVA'} onClick={() => setFileName('JAVA')}>JAVA</button>
            <button disabled={fileName === 'Python'} onClick={() => setFileName('Python')}>Python</button>
            <button disabled={fileName === 'C'} onClick={() => setFileName('C')}>C lang</button>
            <button disabled={fileName === 'JavaScript'} onClick={() => setFileName('JavaScript')}>JavaScript</button>
            <button disabled={fileName === 'HTML'} onClick={() => setFileName('HTML')}>HTML</button>
            <button disabled={fileName === 'CSS'} onClick={() => setFileName('CSS')}>CSS</button>
        </div>
            <Editor
                onMount={mount}
                height = "80vh"
                theme ="vs-dark"
                path = {file.name}
                defaultLanguage = {file.language}
                defaultValue = {file.value}
            />
                <div className='row'>
                    <Button color='success' sx={{marginRight:51}} variant="outlined">Run</Button><Button onClick={getCode} color='success' variant="contained">Submit</Button>
                </div>
        </>
    )
}

export default Ide