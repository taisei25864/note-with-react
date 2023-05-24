import React from 'react';
import { Center, Text, Input, Textarea, Container, VStack, Button} from "@chakra-ui/react";

const main = ({activeNote, updatedNote, onDelete}) => {

  const onEditNote = (key, value) =>{
    updatedNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now()
    })
  }

  if(!activeNote) {
    return (
      <Container>
          <Center h='100%'>
            <Text 
              fontSize="25px"
              color="gray.500"
              >ノートが選択されていません
            </Text>
          </Center>
      </Container>
    )
  }

  return (
    <Container>
      <Center h="100%">
        <VStack>
          <Input 
            id="title" 
            type="text" 
            value={activeNote.title}
            border="1px"
            borderColor="gray"
            width="50vw"
            height="50px"
            onChange={(e) => onEditNote("title", e.target.value)}
          >
          </Input>

          <Textarea 
            id="content" 
            value={activeNote.content}
            border="1px"
            borderColor="gray"
            width="70vw"
            height="500px"
            onChange={(e) => onEditNote("content", e.target.value)}
          >
          </Textarea>
          <Button
           onClick={() => onDelete(activeNote.id)}
           colorScheme="blue">
            削除
          </Button>
        </VStack>
      </Center>
    </Container>
  );
};

export default main;
