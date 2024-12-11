"use client";
import AutoComplete from "@/entites/AutoComplete";
import { Input } from "@/entites/Input";
import Select from "@/entites/Select";
import Switch from "@/entites/Switch";
import React, { useState } from "react";
import Checkbox from "@/entites/Checkbox";
import Radiobox from "@/entites/Radiobox";

export default function InputPage() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState([]);
  const [bool, setBool] = useState(false);
  return (
    <div className="flex flex-col gap-1 p-8">
      <h2 className="font-bold">Input</h2>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <h2 className="font-bold pt-4">Select</h2>
      <Select
        options={[{ label: "test", value: "test" }]}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <h2 className="font-bold pt-4">Select Multiple</h2>
      <Select
        options={[{ label: "test", value: "test" }]}
        value={value2}
        onChange={(value) => setValue2(value)}
        multiple
      />
      <h2 className="font-bold pt-4">AutoComplete</h2>
      <AutoComplete
        options={["test", "test2", "test3", "test4", "test5"]}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <h2 className="font-bold pt-4">Switch</h2>
      <Switch checked={bool} onChange={(value) => setBool(value)} />
      <h2 className="font-bold pt-4">Checkbox</h2>
      <Checkbox checked={bool} onChange={(value) => setBool(value)} />
      <h2 className="font-bold pt-4">Checkbox Rounded</h2>
      <Checkbox checked={bool} onChange={(value) => setBool(value)} rounded />
      <h2 className="font-bold pt-4">Radiobox</h2>
      <Radiobox checked={bool} onChange={(value) => setBool(value)} />
    </div>
  );
}
