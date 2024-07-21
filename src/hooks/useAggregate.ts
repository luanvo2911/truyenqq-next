import useSWR from "swr";
import { MangaAPI } from "../api";

const useAggregate = () => {};

export default useAggregate;

// handle aggregate data

// const data = {
//   "result": "ok",
//   "volumes": {
//       "none": {
//           "volume": "none",
//           "count": 32,
//           "chapters": {
//               "41": {
//                   "chapter": "41",
//                   "id": "1a20f850-29d5-4556-98bf-1517a4411038",
//                   "others": [
//                       "4acdd9be-d3c0-4643-b1ef-3186ed411b5d",
//                       "285a67ad-019b-432b-8d40-0fd8ec5ad0fe"
//                   ],
//                   "count": 3
//               },
//               "40": {
//                   "chapter": "40",
//                   "id": "ef8791f5-ef22-455b-a399-c492049f8187",
//                   "others": [
//                       "b87d484a-dd94-4fe9-ba1d-39229ea168f2",
//                       "1ebc2a97-3c17-4db8-a9bd-74b104b1e18e",
//                       "ddf94f42-e7d3-492d-aad7-06ebdf417339"
//                   ],
//                   "count": 4
//               },
//               "39": {
//                   "chapter": "39",
//                   "id": "a7cd026f-f8b8-4850-8f20-d796212d3a85",
//                   "others": [
//                       "d0ce8220-9389-4579-a11b-65e020d2332c",
//                       "65f3b9bd-c687-45b7-8c0d-659944ee2c63",
//                       "54e60691-0c64-4f88-bac7-ebb9b67c02a8"
//                   ],
//                   "count": 4
//               },
//               "38": {
//                   "chapter": "38",
//                   "id": "c390109e-5623-4793-a12e-fb513a29221f",
//                   "others": [
//                       "63632daa-17d4-48ac-9332-be2752228cc7",
//                       "934ecf14-928d-43de-a8a2-395b7dddb338",
//                       "3f7c7e32-2b84-45b5-bc31-58a8cf4c0130"
//                   ],
//                   "count": 4
//               },
//               "37": {
//                   "chapter": "37",
//                   "id": "a698f04e-82db-4de9-b299-c7192a9bcf59",
//                   "others": [
//                       "8bc71c6d-905f-4804-bfc7-c98c4be95f67",
//                       "44741f51-af94-41ac-a6e7-6b545e4aa671",
//                       "403194f3-c511-410a-8283-ee85f9cf7261"
//                   ],
//                   "count": 4
//               },
//               "36": {
//                   "chapter": "36",
//                   "id": "69642e2b-cdfd-4855-ace2-07b7f2bc542a",
//                   "others": [
//                       "35305643-3faa-4dbd-aa02-200727745d91",
//                       "a31f5e58-f709-4f30-b390-d59a3afe46b2",
//                       "669f24d7-9dd5-4ae2-88c1-a03ac12fa8b1"
//                   ],
//                   "count": 4
//               },
//               "35": {
//                   "chapter": "35",
//                   "id": "730a4c45-ebe1-4f7c-af8f-9f627f7f1b8f",
//                   "others": [
//                       "82fb8f43-f38a-400e-9546-8d973e629954",
//                       "1231f64b-3221-4207-8edc-f10d018b3703",
//                       "bdd1e8f3-6b9d-45df-8281-b4a4222880f7"
//                   ],
//                   "count": 4
//               },
//               "34": {
//                   "chapter": "34",
//                   "id": "437e2722-2530-49c0-ab89-6026583dc15b",
//                   "others": [
//                       "65cfc6d8-2887-42b0-b797-524b20a89ee6",
//                       "a464e54c-26f8-4b1a-9aee-ad148bdd7dd3",
//                       "87d31cee-0b65-404d-aadc-ed5d90e5a44c"
//                   ],
//                   "count": 4
//               },
//               "16": {
//                   "chapter": "16",
//                   "id": "49ad15b2-313f-4a98-a07d-2d116f6eb01f",
//                   "others": [],
//                   "count": 1
//               }
//           }
//       },
//       "4": {
//           "volume": "4",
//           "count": 48,
//           "chapters": {
//               "33.5": {
//                   "chapter": "33.5",
//                   "id": "b287acde-fae3-4dd2-82cd-686bfcdbdf1b",
//                   "others": [],
//                   "count": 1
//               },
//               "33": {
//                   "chapter": "33",
//                   "id": "d3435c8f-9402-418b-a0d7-b39157269005",
//                   "others": [
//                       "6d523a0f-9356-41f9-bc2f-520960988d9c",
//                       "7a5b2db3-af15-4bcd-81dc-63b879d783b7",
//                       "24739c30-f4d5-40b8-8840-cac2849886c1",
//                       "306808d8-1b75-4a71-b25b-67aa7a55fe88"
//                   ],
//                   "count": 5
//               },
//               "32": {
//                   "chapter": "32",
//                   "id": "dd48c883-988b-4041-b122-c879a710c843",
//                   "others": [
//                       "c6683fa6-5182-4bb9-9613-d7d1fb7056dc",
//                       "25c57528-72c9-40c1-bd16-ba70d61af431",
//                       "2b1d0435-6fac-46a3-a885-f5db6994e7fe",
//                       "cd1bb948-cbae-4a2d-8002-5ae67cd8a1f1",
//                       "57cdf24d-de1c-4470-9dc2-5f10a40d8181"
//                   ],
//                   "count": 6
//               },
//               "31": {
//                   "chapter": "31",
//                   "id": "f031e60b-b0df-4302-b177-a9c56ca5c9fb",
//                   "others": [
//                       "1005dc6e-7929-4e91-a4df-ea2743139f53",
//                       "33214166-b8cf-425a-90ad-2a68b6d7f93c",
//                       "adb1e980-f334-4c5a-a95e-a6751b30120b",
//                       "0d2200dc-7e9f-48ee-b026-6680d27e373b",
//                       "cda2d3a0-6cc4-4f83-8c48-e5a4a4fd6559"
//                   ],
//                   "count": 6
//               },
//               "30": {
//                   "chapter": "30",
//                   "id": "b995111b-c282-4009-ad60-18def0c8ddaf",
//                   "others": [
//                       "2a8f430a-9be9-4e37-854d-394a3cfafb7f",
//                       "60e8c273-a4c8-4d48-b1b7-892af55c5956",
//                       "144e31aa-c255-478e-a092-2ae9fcdc8064",
//                       "1eb4e1a1-fe87-412c-af49-4687af778e2f",
//                       "a2d1f144-e9b0-4462-9b4f-da0933743dcb"
//                   ],
//                   "count": 6
//               },
//               "29": {
//                   "chapter": "29",
//                   "id": "7cb6e137-f740-4ec8-a92f-cfd59dafcd9c",
//                   "others": [
//                       "3976824b-add3-4fa1-a17d-8949e05fd485",
//                       "196efa16-5515-4638-8929-8082a0a737b4",
//                       "ee86fda9-de5b-4e90-bd3e-1c47e5fb7c40",
//                       "09bf6fc6-db14-4fe2-9b71-e592bccc4697",
//                       "16d9a24e-0db0-4606-8a89-6d2756b38b5d"
//                   ],
//                   "count": 6
//               },
//               "28": {
//                   "chapter": "28",
//                   "id": "763da9e0-3643-418e-9259-62e46452541e",
//                   "others": [
//                       "b082e8ce-2177-493c-bdf0-76bd768ab869",
//                       "727dd44b-c687-41ae-a01d-3137ae7eb098",
//                       "e61d142d-1da8-4e28-a1d1-76d80bfe0d29",
//                       "0672f703-9e5c-40c5-b502-0e3f4a173bf8",
//                       "7fd37a2a-8186-4b3f-86ae-a3090acac051"
//                   ],
//                   "count": 6
//               },
//               "27": {
//                   "chapter": "27",
//                   "id": "f8db8d64-db06-4a37-8c11-6496e002eefb",
//                   "others": [
//                       "216a966d-58ec-42d8-932a-72e91ba6eb6f",
//                       "0cc73438-4ff7-4186-b810-3ec48c0d37f9",
//                       "19491eaa-a9f3-4f58-beab-c3ec402ed4e9",
//                       "9e93c709-915a-4206-89c5-a9a4fb51a757",
//                       "463a58eb-61e3-442f-bb76-747a9293155a"
//                   ],
//                   "count": 6
//               },
//               "26": {
//                   "chapter": "26",
//                   "id": "47354c64-cb0e-4da6-ae3d-677d24910f79",
//                   "others": [
//                       "2c5ec063-0bb6-48d8-b7a8-a42f4405d889",
//                       "08607553-f5c1-4a25-b2e0-dfb14436f858",
//                       "6f64d1c7-7a4d-453c-aaf3-292edafe3274",
//                       "7fb207fc-81b3-4cc0-962c-15cbb6af9c40",
//                       "6ce55dfb-26ec-49cc-9151-090b58e6def0"
//                   ],
//                   "count": 6
//               }
//           }
//       },
//       "3": {
//           "volume": "3",
//           "count": 70,
//           "chapters": {
//               "25.5": {
//                   "chapter": "25.5",
//                   "id": "8fab1496-dcdb-4ade-8d37-1a3236ec7b2a",
//                   "others": [
//                       "c282f7ed-b020-4d69-9de1-f2deb50b071c",
//                       "b8e14ce8-c59f-48f6-94c0-a60252349ebf"
//                   ],
//                   "count": 3
//               },
//               "25": {
//                   "chapter": "25",
//                   "id": "48a4b0ee-6fc8-4a52-a963-cdde1a041fc6",
//                   "others": [
//                       "55c2de93-1ced-481b-bda4-ea6dbbf8c1a9",
//                       "851f3473-5e65-4904-ab0f-ba976238e72a",
//                       "1761bb36-0b37-4772-a64c-91b744cf355a",
//                       "14e04e3b-0766-4c1f-a434-25935c7e8795",
//                       "f33b29ea-ce82-4c38-915c-b59178b7a693"
//                   ],
//                   "count": 6
//               },
//               "24": {
//                   "chapter": "24",
//                   "id": "11825b4e-e2d8-42f1-86f3-882b3f06914c",
//                   "others": [
//                       "33b541fe-6898-49f9-a13c-450fc697bae5",
//                       "f89d3dad-8cee-4b40-bf3d-ebb7111a6def",
//                       "0b73028c-05c5-4206-8b8f-7828385f17d4",
//                       "48401521-5999-415e-a07c-4e17aba0f06c",
//                       "ebae3258-07b3-4797-a8ad-da318eefdf03"
//                   ],
//                   "count": 6
//               },
//               "23": {
//                   "chapter": "23",
//                   "id": "3f0bf061-d2a6-4020-8fdc-371d697ce87f",
//                   "others": [
//                       "90cb68b7-cf7d-4e07-b7a8-a79a52320527",
//                       "74405ff1-bde4-4528-b15b-8bc3ca759a8f",
//                       "9b0d6400-1cc1-402c-a73a-c40beb183a4c",
//                       "6e1194bc-f7af-4358-bb4d-464cae219b3d",
//                       "915eb7da-2a7a-42e4-915d-bfafa80b9cd9",
//                       "a70e8e9f-cbf7-4c5b-87e2-0ef92f777a4b",
//                       "328dabf8-455f-4e3a-aab2-30f52f9f067b"
//                   ],
//                   "count": 8
//               },
//               "22": {
//                   "chapter": "22",
//                   "id": "b5be9f33-9733-43d7-a166-d702e7f607c2",
//                   "others": [
//                       "17c5e876-ed1f-4237-8aa5-a082b7f9d336",
//                       "84d973a7-a147-47cc-9afc-778330cec4b9",
//                       "bee64ac4-1fc7-4f17-b2a9-cb6806e15079",
//                       "78b57ff3-4bc6-4ba3-957b-0386ea2c863b",
//                       "8140870d-2bdb-4821-86fb-fbef7e9b4026",
//                       "8b38746d-1817-48eb-a35f-93fd6e5a4028",
//                       "932d924f-2a32-4a63-bed2-fb46215ef7f8"
//                   ],
//                   "count": 8
//               },
//               "21": {
//                   "chapter": "21",
//                   "id": "51014d5e-69fa-45e4-a3bc-7486bec2967d",
//                   "others": [
//                       "7030f86b-b9f5-40c6-a956-4152c062d849",
//                       "c43368e9-d15a-4b43-9978-41fb05edd4af",
//                       "01cc4afc-2714-4a00-ac85-652709e6efe2",
//                       "e5ac2ac6-e3ae-40bb-ae15-c11d6f47b266",
//                       "43df2c58-0db4-4347-ba1c-e0acecce13e0",
//                       "f14c203e-df4e-4b55-9197-46ea141a03e7",
//                       "e829a093-1f3c-4eda-9271-766e78e26a78",
//                       "de74513a-f37e-4750-8b78-afa89d7196ea"
//                   ],
//                   "count": 9
//               },
//               "20": {
//                   "chapter": "20",
//                   "id": "54d3dee8-3b36-4f0e-a3b3-6adc9ee7ef94",
//                   "others": [
//                       "8d2ab781-f427-4621-8eff-1c8ba074e3dc",
//                       "8b17ff8b-97de-495e-be72-7ed88a8597e5",
//                       "67532603-2155-4191-8145-e89c7a9e7ac1",
//                       "e975f23c-376c-42cd-9147-ea4aad2dafe5",
//                       "8ca87422-0900-49e7-9b81-eb1d61a6f3cc",
//                       "e01c1f78-64f1-4197-9683-f5c94af9e0b3",
//                       "ea6e88a7-8674-4e6c-be09-d45cf6580985",
//                       "6360e494-02fb-4800-88a4-3c7de3b1eb25"
//                   ],
//                   "count": 9
//               },
//               "19": {
//                   "chapter": "19",
//                   "id": "2d682cf6-db28-458f-accc-a7488afc1597",
//                   "others": [
//                       "a6561b7e-4836-45c9-9a0d-4331834a56aa",
//                       "74f345be-e990-46be-921a-e5b7efe5c085",
//                       "a043a839-e73d-455e-bb2d-b93544531d64",
//                       "6c1a8bc3-7f9a-404f-8a3c-9bd58a058a43",
//                       "0da48398-0324-4627-9492-f38e12f6d53f",
//                       "312416c6-2022-4115-9a96-689064d0985c",
//                       "9d0e424e-85b7-4f9d-8b65-28dbb8b69889",
//                       "a6374659-5d93-4b76-8b9d-4195cf3be54a",
//                       "3cd17279-a282-4845-97bd-9d8f2a59d46e"
//                   ],
//                   "count": 10
//               },
//               "18": {
//                   "chapter": "18",
//                   "id": "30ad9139-d9f4-4203-b9d0-ef51c8e5d6e4",
//                   "others": [
//                       "0ec4947d-3344-48c6-9ca7-68d293e5539a",
//                       "9b881b41-5509-430e-a87e-feaae0064547",
//                       "e08e9d55-8661-4775-86d9-c86a069fbb1a",
//                       "ba51f256-c8ef-46fb-94d1-9e548f2986bc",
//                       "5cf8bc0c-b5d1-4540-96d8-3d8bfb80e3ea",
//                       "275ecdf3-3a75-44ac-a329-daccb9517987",
//                       "4fde43f9-32b1-4be1-aecd-8927d14d441a",
//                       "39e87e2b-ea2a-4fe4-b5b3-711c6c2b8c9e",
//                       "9f5cf19a-d3ea-4578-b3af-dc9e8e395995",
//                       "cdea12d2-57d0-41e7-87e8-868f02620ab9"
//                   ],
//                   "count": 11
//               }
//           }
//       },
//       "2": {
//           "volume": "2",
//           "count": 85,
//           "chapters": {
//               "17.5": {
//                   "chapter": "17.5",
//                   "id": "ad72d1fa-7279-40c4-9637-a58bfbba96e3",
//                   "others": [],
//                   "count": 1
//               },
//               "17": {
//                   "chapter": "17",
//                   "id": "d5413884-0fd4-45f9-a05f-9f8019e7de9f",
//                   "others": [
//                       "6bdb89b2-1e54-4651-9d15-1fef419e5eef",
//                       "6015d661-6b10-480c-a204-60fbf1316654",
//                       "f80e4fa7-7356-44c8-ac08-66be931c47b9",
//                       "f9027451-cec8-415a-9692-6ad13812c7b0",
//                       "15ac1732-53f3-4f45-9d2a-4fc63a348ad3",
//                       "05ceecdf-c281-4a56-a168-f9abb9c02765",
//                       "53f9a34b-e050-4514-abb7-beac5d032324",
//                       "c5abf010-f0fa-4e24-913f-0020cd6d8173",
//                       "bd447919-94f4-4594-af9a-9c1a75e78e18"
//                   ],
//                   "count": 10
//               },
//               "16": {
//                   "chapter": "16",
//                   "id": "66f80652-bfb9-43b5-85a5-3fa832241b15",
//                   "others": [
//                       "3fb50cde-8fe0-4df3-9e0d-3efd9d922ae5",
//                       "78882e8d-7bf9-48a0-ba7c-d137f4cda2be",
//                       "a4b8587e-17c4-417c-af2e-78840c7d45be",
//                       "990955fb-b1f8-4a0d-a2e1-8eec5f5f7e34",
//                       "08e50565-0694-4339-a1e2-627ddc70e2e7",
//                       "6765394a-b064-4941-a58b-dcc0095a78d0",
//                       "9b4ae6dd-df38-4acc-856e-8a09ab7a6338",
//                       "766ba12e-2352-4aed-b502-4f46c6878954",
//                       "6b8a2fa6-b0ab-4211-9fe4-f18a21632242"
//                   ],
//                   "count": 10
//               },
//               "15": {
//                   "chapter": "15",
//                   "id": "0376a17e-0654-43bd-82dd-c68528151424",
//                   "others": [
//                       "5c075f3a-49c8-470c-806d-2ab0d228106f",
//                       "1522881d-72e3-4907-a228-5d68842edf52",
//                       "644ae8be-a4f6-4915-9dd6-c57f5aff9f59",
//                       "e56efc8c-8aa7-4fcb-8187-65d09aef58a8",
//                       "d871ea99-a704-4457-8b96-e636f665acbd",
//                       "242082b5-be06-4676-a2cb-1113fb607f62",
//                       "41bf9ad8-83b1-40d0-82b7-daf3af1f2d33",
//                       "5f2d7482-4e51-45f5-9768-be19a45ae4df",
//                       "7311abe6-5a7a-4668-9d26-d068ddc475c1"
//                   ],
//                   "count": 10
//               },
//               "14": {
//                   "chapter": "14",
//                   "id": "0e945d16-dcf8-4110-9293-807bbb9112f9",
//                   "others": [
//                       "2d222d83-db1a-4003-8387-56eb82079de6",
//                       "2ad0c084-f16e-43a4-8eb6-9c28c716e256",
//                       "27630341-0677-457b-945b-f70ac9672bda",
//                       "4942d01b-5d70-406a-91d1-2b27b56252b8",
//                       "1c7c3e9e-d40e-4da6-957b-6f1e62b7ab82",
//                       "608c636a-14ec-461d-9a6b-ed7def1ad4ba",
//                       "79262d00-4ec9-47e7-8756-f3622cc7b122",
//                       "b435688b-cada-4b43-bdcc-4b179c923c8f",
//                       "9cdbb49d-b15b-456a-9eff-bc1225384215"
//                   ],
//                   "count": 10
//               },
//               "13": {
//                   "chapter": "13",
//                   "id": "0f51960c-427b-435c-8ba9-75c2a6ebd401",
//                   "others": [
//                       "4393e322-6051-42b9-8aeb-20618e518511",
//                       "d55b7f9d-e06e-46d3-83d0-fc463398fb9f",
//                       "6aefb82c-b2c2-4fda-97a1-c62b3a1972d7",
//                       "9dcf3094-b6c4-4a6e-83c7-545fa3a91830",
//                       "e48512cb-48c8-4426-ac4c-ed26dcbf1b31",
//                       "ed6494f4-5402-4815-8641-7d3fac9acbe9",
//                       "04d1cb0b-0890-4c85-b10c-44a38fa16c37",
//                       "114a3fff-18c6-46e4-a50e-911c411a0f5b",
//                       "e8cb9e0f-5a22-4cc7-ab03-e3b2a975f417"
//                   ],
//                   "count": 10
//               },
//               "12": {
//                   "chapter": "12",
//                   "id": "57bd28f8-61f9-4eed-8c08-c521367defdb",
//                   "others": [
//                       "655bb69b-68e2-43c1-9b3a-9ca546e24b2a",
//                       "fba0f83d-c4de-486e-9f84-27d34a87cfda",
//                       "4ecfdf7b-84ce-444d-8aad-f1acf9aa712e",
//                       "5f9d851f-fd30-4a3e-b272-c4aa63c6fb33",
//                       "3106c118-5730-43cd-bfdc-c10b5847d142",
//                       "6537776f-75fb-4e05-a2e7-0f51e20ca24b",
//                       "606cdc3e-7eee-4b1c-8cfb-dcf9400a9094",
//                       "f6d8774d-2653-4a07-8ade-759594a261c0",
//                       "c7bb4183-aaca-4e39-a558-6b5ba3087ee7",
//                       "b9d64d73-f1ca-4659-af11-bd1da757bf57"
//                   ],
//                   "count": 11
//               },
//               "11": {
//                   "chapter": "11",
//                   "id": "3296be51-5180-4313-88dd-40e38714506a",
//                   "others": [
//                       "d13ca5d8-1ef8-4d02-b91f-68e1c4a4a233",
//                       "f33adb0f-368c-4801-8558-211bc426c844",
//                       "111ea118-c74b-4abd-b1c0-d1186ecca6de",
//                       "707cd352-8ad2-46df-99e8-7f5174187c17",
//                       "624bbfad-497b-4661-ab12-8f33c3d39645",
//                       "5dce56a2-f443-404e-a779-806e1b9e1174",
//                       "9824756b-a70a-4d16-b672-a43e8f208ce7",
//                       "845b7126-d8f3-4710-81ad-c0c8018a2aea",
//                       "d300ed73-1c74-445c-bea5-367145c8e0c0",
//                       "8f5f7c04-0d7e-4d6e-98a6-7e07aa707324",
//                       "dd082bee-96f7-4c37-b7a8-bb6fcd6767b3"
//                   ],
//                   "count": 12
//               },
//               "10": {
//                   "chapter": "10",
//                   "id": "1464c044-18bf-4f81-b313-e67cfbae35f0",
//                   "others": [
//                       "57ac0f8d-1371-4c9a-9a89-38dabfac4cde",
//                       "48406e97-74f3-445b-87ae-6569504d581e",
//                       "7c2fb162-78ae-4a03-a756-50efa55808af",
//                       "e41cd44a-289f-4c51-97d3-6ffdd810fd31",
//                       "082791d3-5832-44b3-9772-6b9d814ec8aa",
//                       "ce025c41-588c-48d2-bb79-e3be5bfbb88d",
//                       "b6a39d25-8e5d-4362-84fc-447e5dc045e9",
//                       "09aab4bd-0301-4189-bec1-798270b95e2a",
//                       "2c87b1bf-3675-4e57-a5c2-4fa5af4cf0f0",
//                       "2b7602f8-4cad-4ac7-b4e0-576bad13e9d6"
//                   ],
//                   "count": 11
//               }
//           }
//       },
//       "1": {
//           "volume": "1",
//           "count": 114,
//           "chapters": {
//               "9.5": {
//                   "chapter": "9.5",
//                   "id": "3b8910bd-a26d-4238-ba3e-5bb59edbc1a5",
//                   "others": [
//                       "3f109c5d-9f85-4104-9a4c-524c294a8be6",
//                       "e19e4c11-3202-4bd6-9b6b-40397cbe3fca"
//                   ],
//                   "count": 3
//               },
//               "9": {
//                   "chapter": "9",
//                   "id": "56a73c03-ef78-4f7a-99c0-ddcc1d75cc4c",
//                   "others": [
//                       "378011f3-f8f0-4c77-8845-e1a206acc2f5",
//                       "ddd38695-0ce3-4d1e-9634-9b790c084038",
//                       "dbd1cf54-0c8f-4877-9e30-9e757ebe3bc6",
//                       "c949c73d-dc56-4993-89bf-2fd5627a0e90",
//                       "f5637565-eb75-491f-b2ef-a48a1a68c95e",
//                       "dddd0514-d3d7-46aa-ba13-7c5eaab8d46b",
//                       "e7fa37f0-2870-485c-aa6e-00f13858a616",
//                       "98282827-1e4b-466f-98d0-e4ba6d8807d0",
//                       "0919ee37-cafb-42e9-80c4-b32b5120b557",
//                       "5d7149d4-591f-4545-8b25-42a5e89bcec3",
//                       "a6815e23-bc98-45ea-a394-725591619b33"
//                   ],
//                   "count": 12
//               },
//               "8": {
//                   "chapter": "8",
//                   "id": "1b830b9d-48fb-4ef4-8673-b5674c37f2e5",
//                   "others": [
//                       "1905f279-7b26-499b-a21a-5749e1161eec",
//                       "5b6048ce-e1ec-4dc0-98d5-adefe502d592",
//                       "6e1e052e-c5ea-4951-8eaf-7849fdbb8f66",
//                       "90f2769d-6422-4b26-9b9b-6788d363ed12",
//                       "b6a17cb1-5b5b-47cc-99ab-ce0ae32bc9e3",
//                       "cd009838-8ed3-4001-ad04-62184242fa5f",
//                       "9390de54-dc81-4088-b1f6-1f3230900998",
//                       "2ce3629c-29d0-466c-8170-cc25d45f7ade",
//                       "7c362945-e102-4325-8fad-b16d3c6015de",
//                       "c64f9630-a934-4479-bf31-a2ce8f06642f",
//                       "6a78cec1-9c98-4fad-a3d9-0fe34f305047"
//                   ],
//                   "count": 12
//               },
//               "7": {
//                   "chapter": "7",
//                   "id": "530708ed-65bc-4737-917d-d0f775814e75",
//                   "others": [
//                       "4e1ead8b-6c97-40ad-a5dc-4f611b5f79d8",
//                       "39af30c8-29e6-4d42-8edf-a034e4f9af42",
//                       "2d0baa09-1ac1-4330-b208-3c427e18566c",
//                       "8b842e8d-6ded-442f-8398-3a545c186485",
//                       "866adf08-d16c-4ed3-8161-cc89fcd4219f",
//                       "be00a17a-1ab6-4699-b8a6-6bdfec41e9d8",
//                       "d84e4a96-e2d5-49b7-a591-a6b9b0c2d521",
//                       "6b3f0734-4e45-4f19-8877-48c7e870c1c2",
//                       "19367e68-2160-4608-9f6f-79d7fc77c79e",
//                       "5449b2d9-00fb-4665-9c6b-62a6d54e825d",
//                       "b14c52c2-892f-49cb-8131-7a2bae46406b"
//                   ],
//                   "count": 12
//               },
//               "6": {
//                   "chapter": "6",
//                   "id": "131c0316-0c00-4a1a-8c86-f025e34f4729",
//                   "others": [
//                       "6a64345b-1aad-401b-a49a-6be72cb9d265",
//                       "d8f0a8c7-454a-4fa1-b716-1553cbafe51c",
//                       "0c173b44-3550-497b-a4ce-ff8d183c69b8",
//                       "1f63b43d-ae5f-42ed-9b4a-29611945c72c",
//                       "63d199a5-a71c-46f7-a91f-03262761fd63",
//                       "2b4b060d-3189-4bfe-9122-56e37ebeb184",
//                       "4066b3cb-08df-48ef-869b-481815cf08b1",
//                       "59abba6b-d368-4480-90ea-07c964ec4c76",
//                       "5f624cbe-601a-452c-9649-91c92b7c42b7",
//                       "9b5a4fdc-4525-4d5b-9249-e646f98863a5"
//                   ],
//                   "count": 11
//               },
//               "5": {
//                   "chapter": "5",
//                   "id": "dab57b2c-aafd-4f74-ad8d-39d18935948d",
//                   "others": [
//                       "5d23d8cc-7c2e-4768-980e-726c02074540",
//                       "53ebfbf0-dbb6-4007-83f8-c9a3cc60f716",
//                       "96f6835d-702c-40d4-abf6-d4dee67c2b85",
//                       "b88e5909-b703-474a-874d-bd2892f239b8",
//                       "f42e90d9-7cc8-4d40-bdac-3861d12dca1a",
//                       "0c2d15b6-b0ea-4701-898e-ce1bc6446728",
//                       "3e73e069-1bfe-4696-b332-256c825a72cf",
//                       "85d8917f-ec3d-4cfb-8f65-f031ff56188b",
//                       "733bf5d3-5805-4fcf-830b-5dc2cc8aa24d",
//                       "dca0c924-9f7a-4286-ae7f-11873dde94b0"
//                   ],
//                   "count": 11
//               },
//               "4": {
//                   "chapter": "4",
//                   "id": "5a98ca0c-1457-46c1-88cf-4454052f2fe5",
//                   "others": [
//                       "a4270270-a867-4665-ad3c-64ee1af1f6ab",
//                       "a8f927ae-7ec2-4a50-b914-956ec51a605b",
//                       "fbff1dcd-72f9-420d-afa4-ab5d4c14e32a",
//                       "4c22e8dd-881d-4d86-a136-33588fa43a06",
//                       "299e5cc0-3c08-4e31-8ad3-06eaae7b1724",
//                       "58092a93-ad85-45d8-83ae-5fe161369e1c",
//                       "685ee944-e700-4112-bb48-5c55272217ed",
//                       "9b00b1fa-aa1b-415e-a10f-6b3f532f4b5d",
//                       "801bedef-db1f-43db-a71e-a73abe433081",
//                       "e1c4667f-1091-4cfd-b37e-089767a37fc8"
//                   ],
//                   "count": 11
//               },
//               "3": {
//                   "chapter": "3",
//                   "id": "1fd4fb47-2458-4ab0-8f38-8c43c0f09736",
//                   "others": [
//                       "70d1ff42-5703-48d3-9693-1b22bcb1b371",
//                       "6defa873-ae99-4032-85a1-6b4dd965c9c0",
//                       "bfe3e8bc-b2d4-4c6b-b9f3-068b8bb659ac",
//                       "dd8edd5f-da40-4cbb-9dc8-5b41c902e975",
//                       "c7a1738c-4674-4aca-a233-021030b74166",
//                       "443346f7-a7c4-4ecf-a715-016757674b44",
//                       "3e07039e-93d3-4ec8-a928-57055e40d243",
//                       "7e506b4a-72c0-4436-bfce-4c60235cabaa",
//                       "c459f05f-96a5-4c4d-accc-d07c74a8c514",
//                       "1598f1c6-b8fc-4035-8a54-8d1762ee5d0a",
//                       "6b0b1966-1ae4-4736-a3df-bcaa9c77bd0d",
//                       "a3f259e3-d3d2-4e50-a512-2168151aa298",
//                       "c2df46ce-ece1-4301-9a75-3d48876499d4"
//                   ],
//                   "count": 14
//               },
//               "2": {
//                   "chapter": "2",
//                   "id": "1d54be34-b87d-49bc-88bc-00e16033bfa7",
//                   "others": [
//                       "09642dda-750a-4c69-991f-819b6e654c04",
//                       "a456a782-17ce-4011-9725-92cbdd708ba3",
//                       "adb34003-3f36-4f65-af45-2c0ff5d702b4",
//                       "eb7166ef-b71a-4a88-a382-6bbe7a9068c3",
//                       "66dc378f-4923-4c56-9f4b-7bcc60b48fec",
//                       "d645abd9-36a8-41d6-a28c-dfc969716b93",
//                       "2b80ce54-f0fc-474f-a5b6-1bf13078043d",
//                       "3d53e6db-faf4-4a2e-bb87-6c1d163bb2bd",
//                       "73bb8f69-8afa-4365-abc3-737dee933500",
//                       "b3fd8ac3-3bcc-41d2-a6bc-e13fbdc49718",
//                       "aa130549-af2f-44cc-8d62-36b958b50c0f",
//                       "8e6d6a72-7884-4982-8a17-ce6c2949653c",
//                       "e7407078-f62f-4666-9442-d23f61952c6e"
//                   ],
//                   "count": 14
//               },
//               "1": {
//                   "chapter": "1",
//                   "id": "6845baf8-5c83-4e6b-8137-c614a3c5a134",
//                   "others": [
//                       "69e63024-f5e0-4015-b9da-820a85097b3d",
//                       "6a9db715-e496-41c2-9bf4-cfb1e55e3ae4",
//                       "6637f9af-ccfb-451c-b318-5721341d1e97",
//                       "27d3518e-37ff-437c-b005-c88062d5bb5b",
//                       "59f2fb74-2c8c-4b78-b43a-a246cd47154c",
//                       "4c41c510-eea5-456d-8d85-cc5df92bdbd1",
//                       "f71c5d4b-0024-4467-acd3-21b6d2eba7f6",
//                       "1fc8a27a-ede0-42bf-8f05-95b2da293b53",
//                       "72cd2d0d-e2cd-4e97-9837-995a8870e225",
//                       "733901ff-3993-42a3-81a0-c32eed1630c0",
//                       "e84feb6c-23b8-498a-acef-8e0cd3c71e91",
//                       "bcbb115c-adaa-4c7b-b3a7-0a389ccb9bd3",
//                       "b5594275-6cae-49f5-b746-99293435787c"
//                   ],
//                   "count": 14
//               }
//           }
//       }
//   }
// }

// let dataMerge = {}
// for (const [key, value] of Object.entries(data.volumes)){
//   // console.log(value.chapters)
//   dataMerge = {...dataMerge, ...value.chapters}
//   // console.log(value)
// }
// console.log(Object.keys(dataMerge))
// console.log(dataMerge["35"])