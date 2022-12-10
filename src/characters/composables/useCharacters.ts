import rickAndMortyApi from '@/api/rickAndMortyApi';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from '../interfaces/character';

const characters = ref<CharacterRickMorty[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
  onMounted(async () => {
    await loadCharacters();
  });

  const loadCharacters = async () => {
    if (characters.value.length > 0) return (isLoading.value = false);

    try {
      isLoading.value = true;
      const { data } = await rickAndMortyApi.get('/character');
      characters.value = data.results;
    } catch (error) {
      hasError.value = true;

      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message);
      }

      errorMessage.value = JSON.stringify(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { characters, isLoading, hasError, errorMessage };
};
