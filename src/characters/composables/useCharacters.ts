import rickAndMortyApi from '@/api/rickAndMortyApi';
import { ref } from 'vue';
import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from '../interfaces/character';

export const useCharacters = () => {
  const characters = ref<CharacterRickMorty[]>([]);
  const isLoading = ref<boolean>(false);

  rickAndMortyApi.get<CharacterRickMortyResp>('/character').then((response) => {
    characters.value = response.data.results;
    isLoading.value = false;
  });

  return { characters, isLoading };
};
