/****************************************************************************
** Meta object code from reading C++ file 'abstractpanel.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.12.8)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../GUI/Widgets/abstractpanel.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'abstractpanel.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.12.8. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_ColorWidget_t {
    QByteArrayData data[3];
    char stringdata0[21];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_ColorWidget_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_ColorWidget_t qt_meta_stringdata_ColorWidget = {
    {
QT_MOC_LITERAL(0, 0, 11), // "ColorWidget"
QT_MOC_LITERAL(1, 12, 7), // "clicked"
QT_MOC_LITERAL(2, 20, 0) // ""

    },
    "ColorWidget\0clicked\0"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_ColorWidget[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
       1,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: name, argc, parameters, tag, flags
       1,    0,   19,    2, 0x06 /* Public */,

 // signals: parameters
    QMetaType::Void,

       0        // eod
};

void ColorWidget::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<ColorWidget *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->clicked(); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        {
            using _t = void (ColorWidget::*)();
            if (*reinterpret_cast<_t *>(_a[1]) == static_cast<_t>(&ColorWidget::clicked)) {
                *result = 0;
                return;
            }
        }
    }
    Q_UNUSED(_a);
}

QT_INIT_METAOBJECT const QMetaObject ColorWidget::staticMetaObject = { {
    &QWidget::staticMetaObject,
    qt_meta_stringdata_ColorWidget.data,
    qt_meta_data_ColorWidget,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *ColorWidget::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *ColorWidget::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_ColorWidget.stringdata0))
        return static_cast<void*>(this);
    return QWidget::qt_metacast(_clname);
}

int ColorWidget::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 1)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 1;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 1)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 1;
    }
    return _id;
}

// SIGNAL 0
void ColorWidget::clicked()
{
    QMetaObject::activate(this, &staticMetaObject, 0, nullptr);
}
struct qt_meta_stringdata_AbstractPanel_t {
    QByteArrayData data[16];
    char stringdata0[228];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_AbstractPanel_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_AbstractPanel_t qt_meta_stringdata_AbstractPanel = {
    {
QT_MOC_LITERAL(0, 0, 13), // "AbstractPanel"
QT_MOC_LITERAL(1, 14, 15), // "updateFromState"
QT_MOC_LITERAL(2, 30, 0), // ""
QT_MOC_LITERAL(3, 31, 17), // "promptColorChange"
QT_MOC_LITERAL(4, 49, 13), // "clipWaveforms"
QT_MOC_LITERAL(5, 63, 7), // "checked"
QT_MOC_LITERAL(6, 71, 15), // "changeTimeScale"
QT_MOC_LITERAL(7, 87, 5), // "index"
QT_MOC_LITERAL(8, 93, 15), // "changeWideScale"
QT_MOC_LITERAL(9, 109, 14), // "changeLowScale"
QT_MOC_LITERAL(10, 124, 15), // "changeHighScale"
QT_MOC_LITERAL(11, 140, 14), // "changeAuxScale"
QT_MOC_LITERAL(12, 155, 14), // "changeAnaScale"
QT_MOC_LITERAL(13, 170, 13), // "changeDCScale"
QT_MOC_LITERAL(14, 184, 24), // "openStimParametersDialog"
QT_MOC_LITERAL(15, 209, 18) // "enableChannelsSlot"

    },
    "AbstractPanel\0updateFromState\0\0"
    "promptColorChange\0clipWaveforms\0checked\0"
    "changeTimeScale\0index\0changeWideScale\0"
    "changeLowScale\0changeHighScale\0"
    "changeAuxScale\0changeAnaScale\0"
    "changeDCScale\0openStimParametersDialog\0"
    "enableChannelsSlot"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_AbstractPanel[] = {

 // content:
       8,       // revision
       0,       // classname
       0,    0, // classinfo
      12,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   74,    2, 0x0a /* Public */,
       3,    0,   75,    2, 0x09 /* Protected */,
       4,    1,   76,    2, 0x09 /* Protected */,
       6,    1,   79,    2, 0x09 /* Protected */,
       8,    1,   82,    2, 0x09 /* Protected */,
       9,    1,   85,    2, 0x09 /* Protected */,
      10,    1,   88,    2, 0x09 /* Protected */,
      11,    1,   91,    2, 0x09 /* Protected */,
      12,    1,   94,    2, 0x09 /* Protected */,
      13,    1,   97,    2, 0x09 /* Protected */,
      14,    0,  100,    2, 0x09 /* Protected */,
      15,    0,  101,    2, 0x09 /* Protected */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    5,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void, QMetaType::Int,    7,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void AbstractPanel::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<AbstractPanel *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->updateFromState(); break;
        case 1: _t->promptColorChange(); break;
        case 2: _t->clipWaveforms((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 3: _t->changeTimeScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 4: _t->changeWideScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 5: _t->changeLowScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 6: _t->changeHighScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 7: _t->changeAuxScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 8: _t->changeAnaScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 9: _t->changeDCScale((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 10: _t->openStimParametersDialog(); break;
        case 11: _t->enableChannelsSlot(); break;
        default: ;
        }
    }
}

QT_INIT_METAOBJECT const QMetaObject AbstractPanel::staticMetaObject = { {
    &QWidget::staticMetaObject,
    qt_meta_stringdata_AbstractPanel.data,
    qt_meta_data_AbstractPanel,
    qt_static_metacall,
    nullptr,
    nullptr
} };


const QMetaObject *AbstractPanel::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *AbstractPanel::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_AbstractPanel.stringdata0))
        return static_cast<void*>(this);
    return QWidget::qt_metacast(_clname);
}

int AbstractPanel::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 12)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 12;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 12)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 12;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
