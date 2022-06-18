import { gql } from "graphql-request";
import { graphcms } from "./client";

export const getGiyotinCamSilinebilirSistems = async () => {
  const getData = gql`
  {
    giyotinCamSilinebilirSistems(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { giyotinCamSilinebilirSistems } = await graphcms.request(getData);
  
  return giyotinCamSilinebilirSistems;

}

export const getGiyotinCamSabitSistems = async () => {
  const getData = gql`
  {
    giyotinCamSabitSistems(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { giyotinCamSabitSistems } = await graphcms.request(getData);
  
  return giyotinCamSabitSistems;

}

export const getAcilirCamTavanSistemleris = async () => {
  const getData = gql`
  {
    acilirCamTavanSistemleris(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { acilirCamTavanSistemleris } = await graphcms.request(getData);
  
  return acilirCamTavanSistemleris;

}

export const getAluminyumKatlanirKapis = async () => {
  const getData = gql`
  {
    aluminyumKatlanirKapis(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { aluminyumKatlanirKapis } = await graphcms.request(getData);
  
  return aluminyumKatlanirKapis;

}

export const getKisBahcesiSistemleris = async () => {
  const getData = gql`
  {
    kisBahcesiSistemleris(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { kisBahcesiSistemleris } = await graphcms.request(getData);
  
  return kisBahcesiSistemleris;

}

export const getPergoleTentes = async () => {
  const getData = gql`
  {
    pergoleTentes(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { pergoleTentes } = await graphcms.request(getData);
  
  return pergoleTentes;

}

export const getRollingRoofs = async () => {
  const getData = gql`
  {
    rollingRoofs(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { rollingRoofs } = await graphcms.request(getData);
  
  return rollingRoofs;

}

export const getSurmeCamSistemleris = async () => {
  const getData = gql`
  {
    surmeCamSistemleris(orderBy: publishedAt_DESC) {
      fotograf {
        id
        url
      }
    }
  }
  `;

  const { surmeCamSistemleris } = await graphcms.request(getData);
  
  return surmeCamSistemleris;

}