import { ref, computed } from 'vue';
import rickAndMortyApi from '@/api/rickAndMortyApi';

import type {
  CharacterRickMorty,
  CharacterRickMortyResp,
} from '../interfaces/character';
import { useQuery } from '@tanstack/vue-query';

const characters = ref<CharacterRickMorty[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacters = async () => {
  if (characters.value.length > 0) return characters.value;
  const resp = await rickAndMortyApi.get<CharacterRickMortyResp>('character');
  return resp.data.results;
};

const loadedCharacters = (data: CharacterRickMorty[]) => {
  hasError.value = false;
  errorMessage.value = null;
  characters.value = data;
};

export const useCharacters = () => {
  const { isLoading } = useQuery(['characters'], getCharacters, {
    onSuccess: loadedCharacters,
  });

  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
    count: computed(() => characters.value.length),
  };
};
