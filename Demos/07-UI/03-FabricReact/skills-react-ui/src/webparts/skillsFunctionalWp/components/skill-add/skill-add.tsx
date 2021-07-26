import * as React from 'react';
import { FC, useState } from 'react';
import { DefaultButton, ButtonType } from "office-ui-fabric-react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import styles from "./skill-add.module.scss";

export interface ISkillAddProps {
    addSkill(skill: string): void
}

export const SkillAdd : FC<ISkillAddProps> = (props: ISkillAddProps) => {

    const [editSkill, setEditSkill] = useState('');

	const handleSkillChange = (e: React.FormEvent<HTMLInputElement>)=> {
        setEditSkill(  e.currentTarget.value ?? '');
	}

    return (
        <div className="styles.addRow">
            <TextField
              onChange={handleSkillChange}
              label="Enter a new skill:"
              style={{ width: "200px" }}
            ></TextField>

            <DefaultButton
              buttonType={ButtonType.primary}
              onClick={() => props.addSkill(editSkill) }
            >
              Add Skill
            </DefaultButton>          
        </div>
    )
}

