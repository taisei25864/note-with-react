import React from 'react';
import { Heading, Box, Button, Text, Container  } from '@chakra-ui/react';

const sidebar = ({onAddNotes, notes, setActiveNote, onDelete, activeNote}) => {

  const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate);

  return (
    <Box 
      shadow="md"
      rounded="md"
      width="200px" 
      height="100vh" 
      background="gray.50" 
      border="1px" 
      borderColor="gray"
    >
      <Button 
        colorScheme="teal" 
        variant="outline"
        onClick={onAddNotes}
        m={2}
        >
          新たな本を作成
      </Button>
      <Box>
        {sortedNotes.map((note, index) => (
          <Box 
            shadow="md"
            rounded="md"
            _hover={{ fontWeight: "bold", cursor: "pointer" }}
            p={2}
            mt={2}
            bg={note.id === activeNote
              ? "gray.200"
              : ""
            }
            fontWeight={note.id === activeNote
              ? "bold"
              : ""
            }
            key={index} 
            border="1px" 
            borderColor="gray"
            onClick={() => setActiveNote(note.id)}
          >
            <Text>{note.title}</Text>
            <Text fontSize="xs">{new Date(note.modDate).toLocaleDateString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit"
                })}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default sidebar;
