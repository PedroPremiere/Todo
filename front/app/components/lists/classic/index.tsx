import {
  CheckboxVisibility,
  DetailsList,
  DetailsListLayoutMode,
  FontIcon,
  IColumn,
  Icon,
  IDetailsListProps,
  mergeStyles,
  SelectionMode,
} from "@fluentui/react";
import CheckBoxClassic from "@/app/components/atoms/checkBoxes/classic";

function renderRow(item: unknown) {
  return <p>item</p>;
}

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: "0 25px",
});

function renderItemColumn(item: unknown, index: number, column: IColumn) {
  if (column.fieldName === "done") {
    return <CheckBoxClassic />;
  }

  return <p>{column.fieldName}</p>;
}

export default function ListClassic() {
  //const columns =
  const items = [
    { key: 1, name: "koko", value: "100" },
    { key: 2, name: "koko1", value: "200" },
    { key: 3, name: "koko2", value: "400" },
    { key: 4, name: "koko3", value: "6500" },
  ];

  const columns = [
    {
      key: "column1",
      name: "Nazwa",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Wartość",
      fieldName: "value",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Done",
      fieldName: "done",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];
  return (
    //<MarqueeSelection
    //selection={this._selection}
    //>
    <DetailsList
      items={items}
      columns={columns}
      compact={true}
      setKey="none"
      selectionMode={SelectionMode.none}
      //setKey="set"
      //setKey="multiple"
      layoutMode={DetailsListLayoutMode.justified}
      //selection={this._selection}
      //selectionPreservedOnEmptyClick={true}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      //checkButtonAriaLabel="select row"
      //onItemInvoked={this._onItemInvoked}
      //onRenderRow={renderRow}
      onRenderItemColumn={renderItemColumn}
    />
    //</MarqueeSelection>
  );
}
