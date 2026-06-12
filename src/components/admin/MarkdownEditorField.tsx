import React from 'react';
import MDEditor from '@uiw/react-md-editor';

interface MarkdownEditorFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

const MarkdownEditorField: React.FC<MarkdownEditorFieldProps> = ({ label, value, onChange, className = '' }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium">{label}</label>
      <div data-color-mode="dark" className="border border-[var(--border)] rounded-lg overflow-hidden">
        <MDEditor
          value={value}
          onChange={(val) => onChange(val || '')}
          preview="live"
          height={300}
        />
      </div>
    </div>
  );
};

export default MarkdownEditorField;
