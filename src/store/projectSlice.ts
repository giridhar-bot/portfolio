import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  selectedProjectId: string | null;
  isModalOpen: boolean;
}

const initialState: ProjectState = {
  selectedProjectId: null,
  isModalOpen: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    openProject: (state, action: PayloadAction<string>) => {
      state.selectedProjectId = action.payload;
      state.isModalOpen = true;
    },
    closeProject: (state) => {
      state.isModalOpen = false;
      state.selectedProjectId = null;
    },
  },
});

export const { openProject, closeProject } = projectSlice.actions;
export default projectSlice.reducer;
