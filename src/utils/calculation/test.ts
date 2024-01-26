// Define your data structures (UnitTypes, UnitsConnects, UnitInfoMapped) and import the function as needed

// Example data
const unitTypes: UnitTypes = {
  data: {
    content: [
      {
        id: 'Type1',
        code: 'Type1',
        text: 'Type 1',
        description: 'Description 1',
        isCurrentUnitSource: true,
      },
      {
        id: 'Type10',
        code: 'Type1',
        text: 'Type 10',
        description: 'Description 10',
        isCurrentUnitSource: false,
      },
      {
        id: 'Type2',
        code: 'Type2',
        text: 'Type 2',
        description: 'Description 2',
        isCurrentUnitSource: false,
      },
    ],
    pageSize: 2,
    hasNext: false,
    pageNumber: 1,
    totalElements: 2,
  },
  status: STATUS_DICT.FULLFIELD,
};

const unitsConnects: UnitsConnects = {
  data: {
    content: [
      {
        deleted: false,
        destination: 'Unit2',
        source: 'Unit1',
        type: 'Type1',
      },
      {
        deleted: true,
        destination: 'Unit1',
        source: 'Unit22',
        type: 'Type2',
      },
      {
        deleted: false,
        destination: 'Unit43',
        source: 'Unit1',
        type: 'Type1',
      },
    ],
    pageSize: 3,
    hasNext: false,
    pageNumber: 1,
    totalElements: 3,
  },
  status: STATUS_DICT.FULLFIELD,
};

const unitInfo: UnitInfoMapped = {
  code: 'Unit1',
};

const res = [{
  id: 'Type1',
  code: 'Type1',
  text: 'Type 1',
  description: 'Description 1',
  isCurrentUnitSource: true,
  unitCodes: ['Unit2'],
},
{
  id: 'Type2',
  code: 'Type2',
  text: 'Type 2',
  description: 'Description 2',
  isCurrentUnitSource: false,
  unitCodes: ['Unit22'],
},
{
  id: 'Type10',
  code: 'Type2',
  text: 'Type 2',
  description: 'Description 2',
  isCurrentUnitSource: false,
  unitCodes: ['Unit43'],
},
];
