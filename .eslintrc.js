module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // ��ֹ�޸�const�����ı���
    'no-const-assign': 2,
    // �ڴ�������������ʱ��������ظ� {a:1,a:1}
    'no-dupe-keys': 2,
    // �������������ظ�
    'no-dupe-args': 2,
    // ���ǿ�ƷֺŽ�β
    semi: ['error', 'always'],
    // ��ֹʹ��console
    'no-console': 1,
    // �ں��������У�����֮ǰ��Ҫִ��һ�µļ��
    // 'space-before-function-parentheses': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ],
    // ������{}��ո�
    'object-curly-spacing': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
