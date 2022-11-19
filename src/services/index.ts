import api from "../api";
import {
  createEntityEndpoint,
  getTreeRowEndpoint,
  createRowEndpoint,
  updateRowEndpoint,
  deleteRowEndpoint,
} from "../config/api.config";

export const stringService = {
  async createEntity() {
    return await api.post<number>(createEntityEndpoint)
  },

  async getRowList() {
    return await api.get(getTreeRowEndpoint())
  },

  async createRow() {
    return await api.post(createRowEndpoint())
  },

  async updateRow(rowId: number) {
    return await api.post(updateRowEndpoint(rowId))
  },

  async deleteRow(rowId: number) {
    return await api.delete(deleteRowEndpoint(rowId))
  }
}